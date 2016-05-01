import React = __React;

declare module "reactDom" {
    interface ReactDomInterface {
        render(component:Object, element:HTMLElement): void;
    }

    var ReactDom:ReactDomInterface;
    export = ReactDom;
}