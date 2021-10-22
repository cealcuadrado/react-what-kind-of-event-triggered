import './Layout.css';

function Layout() {
    const whatKindOfEvent = (text, event) => {
        alert(`Event triggered was ${event.type}`);
    }

    return (
        <div className="layout">
            <button className="btn btn-success" onClick={(event) => whatKindOfEvent('foo', event)}>
                Trigger event
            </button>
        </div>
    );
}

export default Layout;