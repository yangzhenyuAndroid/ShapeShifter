import { ToolMode } from 'app/model/paper';
import * as paper from 'paper';

import { Tool } from './Tool';

export class VectorTool extends Tool {
  onActivate() {}
  onToolModeChanged(toolMode: ToolMode) {}
  onMouseEvent(event: paper.ToolEvent) {}
  onKeyEvent(event: paper.KeyEvent) {}
  onDeactivate() {}
}
