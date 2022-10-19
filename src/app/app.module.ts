import {NgModule} from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponenet } from "./app.component"
import { CardComponent } from "./card.component"


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponenet, CardComponent],
    bootstrap: [AppComponenet],
})
export class AppModule {

}