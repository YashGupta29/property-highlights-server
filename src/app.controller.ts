import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { PropertyHighlight } from './types/property-highlight.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('property-highlights')
  getPropertyHighlights() {
    return this.appService.getPropertyHighlights();
  }

  @Put('property-highlights')
  updatePropertyHighlights(@Body('property_highlights') property_highlights: PropertyHighlight[]) {
    return this.appService.updatePropertyHighlights(property_highlights);
  }

}
