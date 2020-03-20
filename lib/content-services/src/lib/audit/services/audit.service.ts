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

import { Injectable } from '@angular/core';
import { AlfrescoApiService, LogService } from '@alfresco/adf-core';
import { from, Observable, throwError } from 'rxjs';
import { AuditApi } from '@alfresco/js-api';
import { AuditAppPaging } from '@alfresco/js-api/src/api/content-rest-api/model/auditAppPaging';
import { AuditApp } from '@alfresco/js-api/src/api/content-rest-api/model/auditApp';
import { AuditBodyUpdate } from '@alfresco/js-api/src/api/content-rest-api/model/auditBodyUpdate';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  auditApi: AuditApi;

  constructor(private apiService: AlfrescoApiService,
              private logService: LogService) {
      this.auditApi = new AuditApi(this.apiService.getInstance());
  }

  getAuditApps(opts: any = {}): Observable<AuditAppPaging> {
      const defaultOptions = {
          skipCount: 0
      };
      const queryOptions = Object.assign({}, defaultOptions, opts);
      return from(this.auditApi.listAuditApps(queryOptions)).pipe(
          (err: any) => this.handleError(err)
      );
  }

  getAuditApp(auditApplicationId: string, opts?: any): Observable<AuditApp> {
      const defaultOptions = {
          auditApplicationId: auditApplicationId
      };
      const queryOptions = Object.assign({}, defaultOptions, opts);
      return from(this.auditApi.getAuditApp(queryOptions)).pipe(
          (err: any) => this.handleError(err)
      );
  }

  updateAuditApp(auditApplicationId: string, isEnabled: boolean,  opts?: any): Observable<AuditApp> {
      const defaultOptions = {
          auditApplicationId: auditApplicationId,
          auditAppBodyUpdate: new AuditBodyUpdate({isEnabled: isEnabled})
      };
      const queryOptions = Object.assign({}, defaultOptions, opts);
      return from(this.auditApi.getAuditApp(queryOptions)).pipe(
          (err: any) => this.handleError(err)
      );
  }

  private handleError(error: any) {
      this.logService.error(error);
      return throwError(error || 'Server error');
  }
}
