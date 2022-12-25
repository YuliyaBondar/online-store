export interface IComponent {
  render : () => string | Promise<string>;
  addEvents: () => void;
}