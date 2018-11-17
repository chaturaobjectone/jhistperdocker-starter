import { NgModule } from '@angular/core';

import { DockercistarterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DockercistarterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DockercistarterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DockercistarterSharedCommonModule {}
