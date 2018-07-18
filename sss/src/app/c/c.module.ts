import { RouterModule, Routes } from '@angular/router';

import { CComponent } from './c.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {   path: '', component: CComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CComponent]
})
export class CModule { }
