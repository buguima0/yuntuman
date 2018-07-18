import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './a.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: AComponent, children: [
            { path: 'b', loadChildren: './../b/b.module#BModule' },
            { path: 'c', loadChildren: './../c/c.module#CModule' }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [AComponent]
})
export class AModule { }
