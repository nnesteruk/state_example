import React from "react";

class Lifecycle extends React.Component<unknown, { count: number }> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    fetch("https://todo-redev.herokuapp.com/api/users/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  componentDidUpdate(prevProps: unknown, prevState: { count: number }) {
    if (prevState.count !== this.state.count) {
      console.log(this.state.count);
      console.log("Component Did Update");
    }
  }

  shouldComponentUpdate(
    nextProps: Readonly<unknown>,
    nextState: Readonly<{ count: number }>,
  ): boolean {
    if (nextState.count % 2 === 0) {
      return true;
    }
    return false;
  }

  componentWillUnmount(): void {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Увеличить
        </button>
      </div>
    );
  }
}

export default Lifecycle;
