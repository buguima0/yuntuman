import { RouterModule, Routes } from '@angular/router';

import { BComponent } from './b.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {   path: '', component: BComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [BComponent]
})
export class BModule { }
