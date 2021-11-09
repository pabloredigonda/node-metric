import { RegisterMetricAction } from '../../src/metric/action/register/RegisterMetricAction';
import { MetricCreator } from '../../src/metric/action/register/MetricCreator';
import { MetricRepository } from '../../src/metric/domain/MetricRepository';
import { InMemoryMetricRepository } from '../../src/metric/infrastructure/InMemoryMetricRepository';
import { RegisterMetricController } from './metric/action/register/RegisterMetricController';
import { SumMetricController } from './metric/action/sum/SumMetricController';
import { MetricCalculator } from '../../src/metric/action/sum/MetricCalculator';
import { SumMetricAction } from '../../src/metric/action/sum/SumMetricAction';

export class DI{

  private repository: InMemoryMetricRepository | undefined;


  public sumMetricController(): SumMetricController {
    return new SumMetricController(this.sumMetricAction());
  }
  public registerMetricController(): RegisterMetricController {
    return new RegisterMetricController(this.registerMetricAction());
  }

  public registerMetricAction(): RegisterMetricAction {
    return new RegisterMetricAction(this.metricCreator());
  }

  public sumMetricAction(): SumMetricAction {
    return new SumMetricAction(this.metricCalculator());
  }

  public metricCreator(): MetricCreator {
    return new MetricCreator(this.metricRepository());
  }

  public metricCalculator(): MetricCalculator {
    return new MetricCalculator(this.metricRepository());
  }

  public metricRepository(): MetricRepository {
    return this.repository ? this.repository : this.repository =new InMemoryMetricRepository();
  }
}