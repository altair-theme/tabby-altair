import { NgModule, Injectable } from "@angular/core";
import { TerminalColorSchemeProvider } from "tabby-terminal";
import { Theme } from "tabby-core";

import { AltairColorScheme } from "colorScheme";

@Injectable()
class AltairTheme extends Theme {
	name = "Altair";
	css = require("./theme.scss");
	terminalBackground = "#22242d";
}

@NgModule({
	providers: [
		{ provide: Theme, useClass: AltairTheme, multi: true },
		{
			provide: TerminalColorSchemeProvider,
			useClass: AltairColorScheme,
			multi: true,
		},
	],
})
export default class AltairThemeModule {}
