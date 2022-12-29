export interface IComponent {
    render: () => string | Promise<string> | void;
    addEvents: () => void;
}
