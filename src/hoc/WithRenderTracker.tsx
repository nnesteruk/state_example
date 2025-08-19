import { memo, useEffect, useRef } from "react";

function withRenderTracker<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> {
  return memo((props: P) => {
    const count = useRef(0);

    useEffect(() => {
      console.log(
        `Компонент ${WrappedComponent.name} рендерился ${count.current++} раз`,
      );
    });

    return <WrappedComponent {...props} />;
  });
}

export default withRenderTracker;
