/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

window.z = window.z || {};
window.z.media = z.media || {};

z.media.MediaError = class MediaError extends Error {
  constructor(type, mediaType) {
    super();

    this.name = this.constructor.name;
    this.mediaType = mediaType;
    this.stack = new Error().stack;
    this.type = type || MediaError.TYPE.UNKNOWN;

    switch (this.type) {
      case MediaError.TYPE.MEDIA_STREAM_DEVICE:
        this.message = 'Device related failure when getting MediaStream';
        break;
      case MediaError.TYPE.MEDIA_STREAM_MISC:
        this.message = 'Other failure when getting MediaStream';
        break;
      case MediaError.TYPE.MEDIA_STREAM_PERMISSION:
        this.message = 'Permission related failure when getting MediaStream';
        break;
      case MediaError.TYPE.NO_MEDIA_DEVICES_FOUND:
        this.message = 'No MediaDevices found';
        break;
      case MediaError.TYPE.SCREEN_NOT_SUPPORTED:
        this.message = 'Screen sharing is not yet supported by this browser';
        break;
      case MediaError.TYPE.STREAM_NOT_FOUND:
        this.message = 'No local MediaStream found';
        break;
      case MediaError.TYPE.UNHANDLED_MEDIA_TYPE:
        this.message = 'Media type unknown';
        break;
      default:
        this.message = 'Unknown MediaError';
    }
  }

  static get TYPE() {
    return {
      MEDIA_STREAM_DEVICE: 'MediaError.TYPE.MEDIA_STREAM_DEVICE',
      MEDIA_STREAM_MISC: 'MediaError.TYPE.MEDIA_STREAM_MISC',
      MEDIA_STREAM_PERMISSION: 'MediaError.TYPE.MEDIA_STREAM_PERMISSION',
      NO_MEDIA_DEVICES_FOUND: 'MediaError.TYPE.NO_MEDIA_DEVICES_FOUND',
      NO_VIDEO_INPUT_DEVICE_FOUND: 'MediaError.TYPE.NO_VIDEO_INPUT_DEVICE_FOUND',
      SCREEN_NOT_SUPPORTED: 'MediaError.TYPE.SCREEN_NOT_SUPPORTED',
      STREAM_NOT_FOUND: 'MediaError.TYPE.STREAM_NOT_FOUND',
      UNHANDLED_MEDIA_TYPE: 'MediaError.UNHANDLED_MEDIA_TYPE',
      UNKNOWN: 'MediaError.TYPE.UNKNOWN',
    };
  }
};
