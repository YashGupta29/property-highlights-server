import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { PropertyHighlight } from './types/property-highlight.type';

@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getPropertyHighlights() {
    return await this.cacheManager.get('property_highlights') ?? [];
  }

  async updatePropertyHighlights(propertyHighlights: PropertyHighlight[]) {
    await this.cacheManager.set('property_highlights', propertyHighlights ?? []);
    return await this.getPropertyHighlights()
  }
}
