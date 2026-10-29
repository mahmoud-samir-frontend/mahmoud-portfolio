import { Component, inject, input } from '@angular/core';
import { ProjectVisual } from '../../../core/models/portfolio.models';
import { LocaleService } from '../../../core/services/locale.service';

@Component({
  selector: 'app-project-visual',
  template: `
    <div class="project-visual" [class]="'project-visual visual-' + type()" aria-hidden="true">
      <div class="visual-window">
        <div class="visual-bar"><i></i><i></i><i></i><span>{{ label() }}</span></div>
        <div class="visual-sidebar"><b>MS</b><i></i><i></i><i></i><i></i></div>
        @switch (type()) {
          @case ('analytics') {
            <div class="visual-content dashboard-grid">
              <div class="metric"><small>{{ locale.copy().visual.activeUsers }}</small><strong>8,420</strong><em>+12.4%</em></div>
              <div class="metric"><small>{{ locale.copy().visual.conversion }}</small><strong>24.8%</strong><em>+3.1%</em></div>
              <div class="chart-card"><div class="line-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
              <div class="donut-card"><div class="donut"><span>74%</span></div></div>
            </div>
          }
          @case ('map') {
            <div class="visual-content map-grid">
              <div class="map-lines"><i></i><i></i><i></i><i></i><b class="pin pin-a"></b><b class="pin pin-b"></b><b class="pin pin-c"></b><span class="route"></span></div>
              <div class="vehicle-panel"><small>{{ locale.copy().visual.fleetStatus }}</small><strong>{{ locale.copy().visual.vehiclesOnline }}</strong><div><i></i><span></span></div><div><i></i><span></span></div><div><i></i><span></span></div></div>
            </div>
          }
          @case ('sensors') {
            <div class="visual-content sensor-grid">
              <div class="gauge"><div><span>76%</span></div><small>{{ locale.copy().visual.tankLevel }}</small></div>
              <div class="sensor-chart"><small>{{ locale.copy().visual.waterFlow }}</small><div><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
              <div class="reading"><small>{{ locale.copy().visual.temperature }}</small><strong>24.8°</strong></div>
            </div>
          }
          @case ('logistics') {
            <div class="visual-content logistics-grid">
              <div class="shipment-line"><i class="complete"></i><span></span><i class="complete"></i><span></span><i></i></div>
              <div class="alert-card"><small>{{ locale.copy().visual.liveConditions }}</small><strong>Shipment #284</strong><p><i></i> {{ locale.copy().visual.temperatureStable }}</p><p><i></i> {{ locale.copy().visual.insideGeofence }}</p></div>
            </div>
          }
          @case ('transport') {
            <div class="visual-content transport-grid">
              <div class="driver-card"><span>MS</span><div><strong>Ahmed K.</strong><small>{{ locale.copy().visual.driverActive }}</small></div><em>4.9</em></div>
              <div class="trip-card"><small>{{ locale.copy().visual.currentTrip }}</small><strong>King Fahd Rd.</strong><div class="trip-progress"><i></i></div><p><span>12 min</span><span>8.4 km</span></p></div>
            </div>
          }
        }
      </div>
      <span class="illustrative-label">{{ locale.copy().visual.illustrative }}</span>
    </div>
  `,
})
export class ProjectVisualComponent {
  protected readonly locale = inject(LocaleService);
  readonly type = input.required<ProjectVisual>();
  readonly label = input.required<string>();
}
