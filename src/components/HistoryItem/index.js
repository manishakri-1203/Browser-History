import './index.css'

const HistoryItem = props => {
  const {historyList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="history-items-container">
        <p className="history-time">{timeAccessed}</p>
        <div className="domain-logo-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-conatiner">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onRemoveHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
