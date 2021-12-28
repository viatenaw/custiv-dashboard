const StatusTile = (props) => {
    const { status, children, ...other } = props;
    let bgColor = '#FFEEDA';
    let textColor = '#FF8C04';
    let statusText = 'In-Progress'
    if (status === 'received') {
        bgColor = '#D5F6FF';
        textColor = '#00B1ED';
        statusText = 'Received'
    } else if (status === 'requested') {
        bgColor = '#CAF7E7'
        textColor = '#0BC281'
        statusText = 'Requested'
    }
    return (<div style={{ borderRadius: '14px', background: bgColor, height: '22px', display: 'flex', alignItems: 'center', width: '120px' }}>
        <div
            style={{
                height: '6px',
                width: '6px',
                borderRadius: '50px',
                display: 'inline-block',
                backgroundColor: textColor,
                margin: '0 10px'
            }}
        >
        </div>
        {statusText}
    </div>)
};

export default StatusTile;
