/*
 * Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

export enum LOG_LEVEL {
  NONE = 0,
  ERROR = 1,
  SESSION = 2,
  PROTOCOL = 3,
  VERBOSE = 4
}

export enum SOURCE_SENDING_STATES {
  NOP = 0,
  WAITING = 1,
  IN_PROGRESS = 2,
  LAST_SENT = 3
}
