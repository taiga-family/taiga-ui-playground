import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TuiRootModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app',
    imports: [TuiRootModule],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
