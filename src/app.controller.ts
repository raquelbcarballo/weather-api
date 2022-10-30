import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultService } from './generated/services/DefaultService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly weatherbitService: DefaultService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getWeather():string{
    return this.weatherbitService.DefaultService.requiredBasicPlanOrHigherReturnsADailyForecastWhereEachPointRepresentsOneDay24HrPeri4();
  }
}
