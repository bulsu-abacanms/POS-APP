
export type AppTheme = {
  colors: {
    backdrop: string;
    surface: string;
    textPrimary: string;
    shadow: string;
  };
  fonts: {
    body: string;
  };
};

export const theme: AppTheme = {
	colors: {
		backdrop: "#a4aaae",
		surface: "#ffffff",
		textPrimary: "#111111",
		shadow: "rgba(0, 0, 0, 0.08)",
	},
	fonts: {
		body: "System",
	},
};

export type Theme = AppTheme;
