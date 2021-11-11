import { RegisterMetricAction } from '../../src/metric/action/register/RegisterMetricAction';
import { MetricCreator } from '../../src/metric/action/register/MetricCreator';
import { MetricRepository } from '../../src/metric/domain/MetricRepository';
import { InMemoryMetricRepository } from '../../src/metric/infrastructure/InMemoryMetricRepository';
import { RegisterMetricController } from './metric/action/register/RegisterMetricController';
import { SumMetricController } from './metric/action/sum/SumMetricController';
import { MetricCalculator } from '../../src/metric/action/sum/MetricCalculator';
import { SumMetricAction } from '../../src/metric/action/sum/SumMetricAction';

export class DI{

  private repository          : InMemoryMetricRepository;
  private calculator          : MetricCalculator;
  private creator             : MetricCreator;
  private sumAction           : SumMetricAction;
  private registerAction      : RegisterMetricAction;
  private sumController       : SumMetricController;
  private registerController  : RegisterMetricController;

  public constructor(){
    this.repository         = new InMemoryMetricRepository;
    this.calculator         = new MetricCalculator(this.repository);
    this.creator            = new MetricCreator(this.repository);
    this.sumAction          = new SumMetricAction(this.calculator);
    this.registerAction     = new RegisterMetricAction(this.creator);
    this.sumController      = new SumMetricController(this.sumAction);
    this.registerController = new RegisterMetricController(this.registerAction);
  }

  public sumMetricController(): SumMetricController {
    return this.sumController;
  }
  public registerMetricController(): RegisterMetricController {
    return this.registerController;
  }

  public registerMetricAction(): RegisterMetricAction {
    return this.registerAction;
  }

  public sumMetricAction(): SumMetricAction {
    return this.sumAction;
  }

  public metricCreator(): MetricCreator {
    return this.creator;
  }

  public metricCalculator(): MetricCalculator {
    return this.calculator;
  }

  public metricRepository(): MetricRepository {
    return this.repository;
  }
}
