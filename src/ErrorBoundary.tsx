// mostly code from reactjs.org/docs/error-boundaries.html
import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<{children: ReactElement}> {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2 className="text-2xl text-purple-600">
                    There was an error with this page.{" "}
                    <Link className="underline" to="/">
                        Click here
                    </Link>{" "}
                    to back to the home page.
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
