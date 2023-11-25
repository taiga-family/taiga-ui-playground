import {importProvidersFrom, Sanitizer} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        importProvidersFrom(TuiRootModule, TuiDialogModule, TuiPushModule),
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
}).catch(err => console.error(err));
