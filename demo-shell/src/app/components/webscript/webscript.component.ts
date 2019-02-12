/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { LogService } from '@alfresco/adf-core';

@Component({
    selector: 'app-webscript',
    templateUrl: 'webscript.component.html'
})
export class WebscriptComponent {

    scriptPath = 'sample/folder/Company%20Home';
    contextRoot = 'alfresco';
    servicePath = 'service';
    scriptArgs = '';

    constructor(private logService: LogService) {
    }

    logData(data) {
        this.logService.log(data);
    }
}
