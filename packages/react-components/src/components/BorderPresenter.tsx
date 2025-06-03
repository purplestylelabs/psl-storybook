import { useMemo } from "react";

type BorderProperty = "width" | "style" | "radius";

export function BorderPresenter({ token }) {
  function extractBorderProperty(variable: string) {
    const match = variable.match(/^--border-([^-]+)-/);
    return match ? match[1] : "";
  }

  function applyBorderStylesBasedOnToken(name): React.CSSProperties {
    const key = extractBorderProperty(name) as BorderProperty;

    switch (key) {
      case "width":
        return {
          border: `${token.value} solid`,
        };
      case "style":
        return {
          border: `3px ${token.value}`,
        };
      case "radius":
        return {
          border: `3px solid`,
          borderRadius: token.value,
        };
      default:
        return key;
    }
  }

  const borderStyles = useMemo(() => {
    return applyBorderStylesBasedOnToken(token.name);
  }, [token]);

  return (
    <div
      style={{
        height: 30,
        ...borderStyles,
      }}
    ></div>
  );
}
