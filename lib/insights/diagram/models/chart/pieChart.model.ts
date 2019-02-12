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

import { Chart } from './chart.model';

export class PieChart extends Chart {
    title: string;
    titleKey: string;
    labels: string[] = [];
    data: string[] = [];

    constructor(obj?: any) {
        super(obj);
        this.title = obj && obj.title || null;
        this.titleKey = obj && obj.titleKey || null;
        if (obj.values) {
            obj.values.forEach((value: any) => {
                this.add(value.key, value.y);
            });
        }
    }

    add(label: string, data: string) {
        this.labels.push(label);
        this.data.push(data);
    }

    hasData(): boolean {
        return this.data && this.data.length > 0 ? true : false;
    }

    hasZeroValues(): boolean {
        let isZeroValues: boolean = false;
        if (this.hasData()) {
            isZeroValues = true;
            this.data.forEach((value) => {
                if (value.toString() !== '0') {
                    isZeroValues = false;
                }
            });
        }
        return isZeroValues;
    }
}
