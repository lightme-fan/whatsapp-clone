import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import { ListGroup } from 'react-bootstrap';

export default function Conversations() {
    const {conversations, selecteConversationIndex} = useConversations()
    
    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item 
                key={index}
                action
                onClick={() => selecteConversationIndex(index)}
                active={conversation.selected} 
                >
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
