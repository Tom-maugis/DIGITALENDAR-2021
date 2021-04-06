import React, { Component } from 'react'
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddDeleteSetting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueOfAdd: props.valueOfAdd || '',
      showFollow: false,
    }
    this.bound = [
      'renderItem',
      'onAddValueChange',
      'onAddItem',
      'onDeleteItem',
      'onChangeItem',
      'onFollowItem',
      'onUnfollowItem',
    ].reduce((acc, d) => {
      acc[d] = this[d].bind(this)
      return acc
    }, {})
  }

  onAddValueChange(event) {
    const valueOfAdd = event.target.value
    this.setState({ valueOfAdd })
  }

  onAddItem(event) {
    const { valueOfAdd, addValueToItem } = this.state
    const { addItem } = this.props
    addValueToItem(valueOfAdd, ({ item, error }) => {
      if (error) {
        this.setState({
          valueOfAdd,
          errorOfAdd: (error || '').toString(),
        })
      } else {
        addItem(item)
        this.setState({ valueOfAdd: '', errorOfAdd: '' })
      }
    })
  }

  onDeleteItem(idx) {
    const { items: itemList, deleteItems } = this.props
    const item = itemList[idx]
    deleteItems([item])
  }

  onChangeItem(item, data) {
    const { setItemData } = this.props
    setItemData(item, data)
  }

  onFollowItem(idx) {
    const { items, followItem } = this.props
    const item = items[idx]
    console.log(item)
    followItem(item)
  }

  onUnfollowItem(idx) {
    const { items, unfollowItem } = this.props
    const item = items[idx]
    unfollowItem(item)
  }

  renderUnFollowButton(follows, i, username) {
    const { onUnfollowItem, onFollowItem } = this.bound

    if (follows) {
      const tip = 'Remove ' + username + "'s public calendar"
      const tooltip = <Tooltip id="tooltip">{tip}</Tooltip>
      return (
        <OverlayTrigger placement="left" overlay={tooltip}>
          <div style={{ display: 'inline-block', margin: '16px' }}>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon="minus"
              onClick={() => onUnfollowItem(i)}
            />
          </div>
        </OverlayTrigger>
      )
    } else {
      const tip = 'Add ' + username + "'s public calendar"
      const tooltip = <Tooltip id="tooltip">{tip}</Tooltip>
      return (
        <OverlayTrigger placement="left" overlay={tooltip}>
          <div style={{ display: 'inline-block', margin: '16px' }}>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon="plus"
              onClick={() => onFollowItem(i)}
            />
          </div>
        </OverlayTrigger>
      )
    }
  }

  renderItem(d, i, user, calendars) {
    const { ItemRenderer, showFollow } = this.state
    const { onChangeItem, onDeleteItem } = this.bound
    const follows =
      showFollow &&
      !!calendars.find(
        c => c.type === 'blockstack-user' && c.data.user === d.username
      )
    const showDelete = d.name !== 'default' || d.type !== 'private'

    return (
      <div key={i}>
        <div style={{ display: 'inline-block', width: '80%' }}>
          {ItemRenderer && (
            <ItemRenderer
              item={d}
              idx={i}
              onChangeItem={onChangeItem}
              user={user}
            />
          )}
        </div>
        {showFollow && this.renderUnFollowButton(follows, i, d.username)}
        {showDelete && (
          <div style={{ display: 'inline-block', margin: '16px' }}>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon="trash-alt"
              onClick={() => onDeleteItem(i)}
            />
          </div>
        )}
      </div>
    )
  }

  render() {
    const { items: itemList, user, calendars } = this.props
    const { renderItem, onAddItem } = this.bound
    const {
      valueOfAdd,
      addTitle,
      listTitle,
      renderAdd,
      errorOfAdd,
    } = this.state
    return (
      <div className="settings">
        <Card>
          <Card.Header>{addTitle}</Card.Header>
          <Card.Body>
            {renderAdd()}
            <Button
              onClick={onAddItem}
              disabled={!valueOfAdd}
              style={{ margin: 8 }}
            >
              Add
            </Button>
            <span style={{ paddingLeft: 16 }}>{errorOfAdd}</span>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>{listTitle}</Card.Header>
          <Card.Body>
            <div>
              {(itemList || []).map((v, k) =>
                renderItem(v, k, user, calendars)
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

/*
 */

export default AddDeleteSetting
