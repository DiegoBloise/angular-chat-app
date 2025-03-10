import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private httpClient: HttpClient) {}

  chats: Chat[] = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'John Doe',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos.',
      lastMessageDate: new Date('2025-03-10T08:15:00'),
      unreadMessagesCounter: 472,
    },
    {
      id: '9a96b9c7-f39d-4f88-921d-83c7482f5587',
      title: 'Alice Smith',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage:
        'Voluptate veniam molestiae fugiat quod, expedita pariatur doloribus!',
      lastMessageDate: new Date('2024-11-23T14:30:00'),
      unreadMessagesCounter: 12,
    },
    {
      id: 'd7a1fc96-d2a0-4d8e-a56d-c4f8d2b9e450',
      title: 'Charlie Brown',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Quisquam, quae! Eveniet autem libero nihil doloremque.',
      lastMessageDate: new Date('2024-11-22T18:45:00'),
      unreadMessagesCounter: 30,
    },
    {
      id: 'ed3c3b77-84f6-4197-8521-1433b69fd127',
      title: 'Emily Davis',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Atque impedit explicabo tempore. Fugit soluta.',
      lastMessageDate: new Date('2024-11-20T10:00:00'),
      unreadMessagesCounter: 8,
    },
    {
      id: '0f1c2e1d-7d22-47ff-8b5d-5369f54f501b',
      title: 'Michael Johnson',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage:
        'Consequatur repellendus molestias. Voluptates quod voluptatem.',
      lastMessageDate: new Date('2024-11-19T23:55:00'),
      unreadMessagesCounter: 0,
    },
    {
      id: 'c2c9fa9c-7b89-4d49-8881-66e9d756e4f1',
      title: 'Sophia Martinez',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Molestiae iusto reprehenderit nisi nulla doloribus.',
      lastMessageDate: new Date('2024-11-17T04:20:00'),
      unreadMessagesCounter: 14,
    },
    {
      id: 'bb5f8f35-77da-4a8e-9e3f-0bb22b79bc55',
      title: 'David Anderson',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Perferendis voluptatum quidem eius rerum repellat.',
      lastMessageDate: new Date('2024-10-12T15:45:00'),
      unreadMessagesCounter: 3,
    },
    {
      id: '034bc5de-2fd5-4e7d-a5f2-28ad9f654c85',
      title: 'Olivia Wilson',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Tempore aperiam alias tenetur atque veritatis.',
      lastMessageDate: new Date('2024-10-05T09:10:00'),
      unreadMessagesCounter: 25,
    },
    {
      id: 'aa9f47ed-0986-4ac9-b6db-f39f63df0541',
      title: 'Lucas Lee',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Nesciunt vitae veritatis eos enim culpa deserunt.',
      lastMessageDate: new Date('2023-12-25T21:30:00'),
      unreadMessagesCounter: 51,
    },
    {
      id: 'b4e820cf-5dc2-4988-9854-062764bc3f71',
      title: 'Mia Thomas',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Earum pariatur odio aliquid officiis nobis.',
      lastMessageDate: new Date('2023-11-23T08:00:00'),
      unreadMessagesCounter: 0,
    },
    {
      id: '5e349c9b-0173-49d6-9ef6-9ad734f7bcb8',
      title: 'James Taylor',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Veniam maiores perspiciatis eos aperiam corrupti.',
      lastMessageDate: new Date('2023-01-01T00:00:00'),
      unreadMessagesCounter: 7,
    },
    {
      id: '17a3a6e4-8f30-41e6-91b3-8996b1e4a0f6',
      title: 'Charlotte White',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Ut facilis fugiat, magnam deleniti quae laboriosam?',
      lastMessageDate: new Date('2022-11-23T11:45:00'),
      unreadMessagesCounter: 19,
    },
    {
      id: '85fa51c6-caad-4b3a-a32e-2f0c7c3b233b',
      title: 'Benjamin Harris',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage:
        'Odit, recusandae repellat. Cum accusantium dolore pariatur!',
      lastMessageDate: new Date('2021-05-15T12:00:00'),
      unreadMessagesCounter: 35,
    },
    {
      id: '654c217d-9534-4521-bb5f-5de3a72685d0',
      title: 'Amelia Walker',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Doloribus repudiandae cumque molestias harum ad.',
      lastMessageDate: new Date('2020-07-20T14:30:00'),
      unreadMessagesCounter: 10,
    },
    {
      id: '0c78e1ab-803e-4d90-9b9f-c21a6bb6a5f8',
      title: 'Liam Young',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Nihil fugit modi cum quis vero!',
      lastMessageDate: new Date('2019-11-23T16:45:00'),
      unreadMessagesCounter: 28,
    },
    {
      id: '33a3e7f6-34bb-470c-a5cb-ec3bb5f1a96e',
      title: 'Isabella King',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage:
        'Possimus quas perspiciatis officiis, exercitationem aliquid.',
      lastMessageDate: new Date('2018-03-10T08:20:00'),
      unreadMessagesCounter: 17,
    },
    {
      id: 'd2b7cda1-2a94-4968-852c-bdc8a1e33f9d',
      title: 'Ethan Scott',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Vel quod debitis autem quasi ducimus!',
      lastMessageDate: new Date('2018-03-15T18:00:00'),
      unreadMessagesCounter: 2,
    },
    {
      id: '12fa45e0-7b4a-4c9c-b5c7-9ae6b349021a',
      title: 'Grace Baker',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Sint architecto impedit, quas nobis culpa?',
      lastMessageDate: new Date('2017-09-17T13:10:00'),
      unreadMessagesCounter: 6,
    },
    {
      id: '8d9e06b2-cacf-4862-9b95-91b78adf76b5',
      title: 'Alexander Garcia',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Ipsam quidem quos eveniet ratione mollitia.',
      lastMessageDate: new Date('2018-03-15T20:30:00'),
      unreadMessagesCounter: 42,
    },
    {
      id: '48bb5a97-2f09-40b1-87e5-bd762f983c45',
      title: 'Ava Rodriguez',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Pariatur porro temporibus deserunt numquam, voluptate?',
      lastMessageDate: new Date('2016-12-31T23:59:59'),
      unreadMessagesCounter: 0,
    },
    {
      id: 'c31a5eb4-21ad-48c8-8439-92f8ea5b07d2',
      title: 'Henry Martinez',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Labore incidunt itaque nostrum placeat rem.',
      lastMessageDate: new Date('2015-01-01T00:00:01'),
      unreadMessagesCounter: 11,
    },
    {
      id: 'b84d05a2-8c95-45b1-8194-a3d9e24f8502',
      title: 'Ella Lopez',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Alias quaerat accusantium labore cum fugit.',
      lastMessageDate: new Date('2024-11-23T12:45:00'),
      unreadMessagesCounter: 23,
    },
    {
      id: '36ae85c2-2d6b-4fbb-a7b9-1b2c48c85fa3',
      title: 'Samuel Clark',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Culpa voluptas veniam impedit recusandae similique!',
      lastMessageDate: new Date('2024-11-23T18:30:00'),
      unreadMessagesCounter: 5,
    },
    {
      id: 'e741a91f-5d27-4bd2-b5f8-02f5c349da87',
      title: 'Harper Allen',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Inventore, aliquid adipisci beatae eligendi quod.',
      lastMessageDate: new Date('2024-11-22T08:15:00'),
      unreadMessagesCounter: 9,
    },
    {
      id: 'a8b705f4-4c12-488b-b915-0c8f57da9be1',
      title: 'Logan Hill',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Voluptatem corrupti asperiores consequuntur dicta eos.',
      lastMessageDate: new Date('2024-11-21T09:30:00'),
      unreadMessagesCounter: 15,
    },
    {
      id: '7d3ae2f9-2b6a-412d-b1c3-e87f5a941cd2',
      title: 'Abigail Adams',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Qui consequuntur molestiae assumenda. Aliquam, saepe?',
      lastMessageDate: new Date('2024-11-21T23:00:00'),
      unreadMessagesCounter: 4,
    },
    {
      id: 'f9e741b2-08d4-4e8c-b75f-31a5d7082cb7',
      title: 'Sebastian Turner',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Nobis expedita nemo nihil perferendis veritatis.',
      lastMessageDate: new Date('2024-11-18T05:45:00'),
      unreadMessagesCounter: 20,
    },
    {
      id: 'ad31a8f2-7f42-435e-8e9c-76a35bd5f2e4',
      title: 'Zoe Carter',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Animi hic eos voluptatem. Fugit, dolor!',
      lastMessageDate: new Date('2024-10-15T11:00:00'),
      unreadMessagesCounter: 13,
    },
    {
      id: '914fa2b5-6c39-4708-bc4d-d9a31ef852a5',
      title: 'Jack Miller',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Optio doloribus accusantium, quibusdam non maiores.',
      lastMessageDate: new Date('2024-10-01T20:20:00'),
      unreadMessagesCounter: 18,
    },
    {
      id: '59d27c14-e6b5-4f81-a83d-b92c4b5fa120',
      title: 'Lily Wilson',
      image: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
      lastMessage: 'Distinctio maxime amet vero earum aut.',
      lastMessageDate: new Date('2022-04-22T19:45:00'),
      unreadMessagesCounter: 22,
    },
  ];

  getChats(): Chat[] {
    return this.chats;
  }

  getChatById(id: string): Chat | undefined {
    return this.chats.find((c) => c.id === id);
  }
}
