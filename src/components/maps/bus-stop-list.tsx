'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton, Typography } from '@mui/material';

interface BusStopListProps {
    list: string[];
    edit?: boolean;
}

export default function BusStopList({ list, edit }: BusStopListProps) {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            {edit ?
            (
                <Typography variant='h6'>Paradas destacadas:</Typography>
            ) : null
        }
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
                {list.map((busStop) => {
                    return (
                        <ListItem sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItemIcon>
                                    <ChatBubbleIcon sx={{ color: '#009e0f', width: '3rem', height: 'auto' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={busStop}
                                />
                            </Box>
                            {edit ?
                                (
                                    <IconButton sx={{ border: '1px solid red', padding: '0.2rem' }}>
                                        <ClearIcon sx={{ color: 'red', width: '1rem', height: 'auto' }} />
                                    </IconButton>
                                ) : null
                            }
                        </ListItem>
                    )
                })}
                {edit ?
                    (
                        <Button variant='outlined' sx={{ minWidth: '16rem' }}><AddIcon /></Button>
                    ) : null
                }
            </List>

        </Box>
    );
}
