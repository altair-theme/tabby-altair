import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'terminus-core'

@Injectable()
class AltairTheme extends Theme {
    name = 'Altair'
    css = require('./theme.scss')
    terminalBackground = '#010101'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: AltairTheme, multi: true },
    ],
})
export default class AltairThemeModule { }
