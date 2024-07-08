import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import Column from './Column';

const KanbanAdmin = () => {
    const [feedbacks, setFeedbacks] = useState({
        notStarted: [],
        inProgress: [],
        done: [],
        archived: []
    });

    const moveFeedback = (feedbackId, source, destination) => {
        const feedback = feedbacks[source].find(f => f.id === feedbackId);
        const updatedSource = feedbacks[source].filter(f => f.id !== feedbackId);
        const updatedDestination = [...feedbacks[destination], { ...feedback }];
        
        setFeedbacks({
            ...feedbacks,
            [source]: updatedSource,
            [destination]: updatedDestination
        });
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <DndContext
                collisionDetection={sortableKeyboardCoordinates}
                onDragEnd={event => {
                    const { active, over } = event;
                    if (active.id !== over.id) {
                        moveFeedback(active.id, active.column, over.column);
                    }
                }}
            >
                <Column title="Not Started">
                    {feedbacks.notStarted.map(feedback => (
                        <div
                            key={feedback.id}
                            className="bg-white p-2 mb-2 rounded shadow-sm"
                            data-column="notStarted"
                            data-id={feedback.id}
                        >
                            {feedback.title}
                        </div>
                    ))}
                </Column>

                <Column title="In Progress">
                    {feedbacks.inProgress.map(feedback => (
                        <div
                            key={feedback.id}
                            className="bg-white p-2 mb-2 rounded shadow-sm"
                            data-column="inProgress"
                            data-id={feedback.id}
                        >
                            {feedback.title}
                        </div>
                    ))}
                </Column>

                <Column title="Done">
                    {feedbacks.done.map(feedback => (
                        <div
                            key={feedback.id}
                            className="bg-white p-2 mb-2 rounded shadow-sm"
                            data-column="done"
                            data-id={feedback.id}
                        >
                            {feedback.title}
                        </div>
                    ))}
                </Column>

                <Column title="Archived">
                    {feedbacks.archived.map(feedback => (
                        <div
                            key={feedback.id}
                            className="bg-white p-2 mb-2 rounded shadow-sm"
                            data-column="archived"
                            data-id={feedback.id}
                        >
                            {feedback.title}
                        </div>
                    ))}
                </Column>
            </DndContext>
        </div>
    );
};

export default KanbanAdmin;
