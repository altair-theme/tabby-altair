import { Injectable } from "@angular/core";
import {
	TerminalColorSchemeProvider,
	TerminalColorScheme,
} from "tabby-terminal";

@Injectable()
export class AltairColorScheme extends TerminalColorSchemeProvider {
	async getSchemes(): Promise<TerminalColorScheme[]> {
		let theme: TerminalColorScheme[] = [];

		theme.push({
			name: "Altair",
			foreground: "#f3f4ef",
			background: "#22242d",
			cursor: "#b4b4ba",
			colors: [
				"#22242d",
				"#ff1654",
				"#06d6a0",
				"#ffe66d",
				"#00abe7",
				"#ff60b5",
				"#7bdff2",
				"#f9f9f9",
				"#22242d",
				"#ff1654",
				"#06d6a0",
				"#ffe66d",
				"#00abe7",
				"#ff60b5",
				"#7bdff2",
				"#f9f9f9",
			],
		});
		return theme;
	}
}
