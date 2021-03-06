/*
 *  Copyright 2020 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import { ReportPortalConfig, StorageTestItem } from '../models';

export const getDefaultMockConfig = (): ReportPortalConfig => ({
  token: '00000000-0000-0000-0000-000000000000',
  endpoint: 'https://reportportal.server/api/v1',
  project: 'ProjectName',
  launch: 'LaunchName',
  description: 'Launch description',
  attributes: [],
});

export const getStorageTestItemMock = (name: string): StorageTestItem => ({
  id: 'tempTestItemId',
  name,
  attributes: [],
  description: '',
});

export class RPClientMock {
  private config: ReportPortalConfig;

  constructor(config?: ReportPortalConfig) {
    this.config = config || getDefaultMockConfig();
  }

  public startLaunch = jest.fn().mockReturnValue({
    promise: Promise.resolve('ok'),
    tempId: 'tempLaunchId',
  });

  public finishLaunch = jest.fn().mockReturnValue({
    promise: Promise.resolve('ok'),
  });

  public startTestItem = jest.fn().mockReturnValue({
    promise: Promise.resolve('ok'),
    tempId: 'tempTestItemId',
  });

  public finishTestItem = jest.fn().mockReturnValue({
    promise: Promise.resolve('ok'),
  });

  public sendLog = jest.fn().mockReturnValue({
    promise: Promise.resolve('ok'),
  });
}

export class StorageMock {
  private testItems: Array<StorageTestItem>;

  public getAllItems = jest.fn();

  public getLastItem = jest.fn();

  public getItemByName = jest.fn();

  public getItemById = jest.fn();

  public getCurrentItem = jest.fn();

  public addTestItem = jest.fn();

  public removeItemById = jest.fn();
}
