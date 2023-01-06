export interface IComponent {
    render: () => string | Promise<string> | void | Promise<void>;
    addEvents: () => void;
}
