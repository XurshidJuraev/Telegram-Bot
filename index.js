const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '5136216894:AAFF3N8RC7mMAaguaF3YO3H-VaIejODLetM'
const fetch = require('node-fetch')

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('polling_error', console.log)

bot.onText(/\/start/, msg => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, `Salom ${msg.from.first_name}, Bizni botga xush kelibsiz`, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: '👩‍💻 Men Haqimda 👨‍💻'
                    },
                    {
                        text: '💰 Men Bajargan Vazifalar 🤑'
                    }
                ],
                [
                    {
                        text: '🤓 Mening Rezumeyim 😇'
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
})
bot.onText(/\/help/, msg => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, `Salom ${msg.from.first_name}, Sizga qanday yordam bera olishim mumkin?`)
})
bot.on('message', msg => {
    console.log(msg)
    if(msg.text == '👩‍💻 Men Haqimda 👨‍💻') {
        bot.sendPhoto(msg.chat.id, 'https://assets.entrepreneur.com/content/3x2/2000/1648240552-Ent-Stackby.jpeg?crop=16:9', {
            caption: "Salom Mening Ismim Xurshidjon Jo'rayev, Men Hozir Najot Ta'limda O'qiyman. Hozirgi kunda Frontend kursini tugatib, Backend Kursida o'qiyapman. Maqsadim FullStack Dasturchi bo'lish, Va katta yirik kompaniyalarda ishlash", 
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: 'Orqaga 🔙'
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            
            
        }
        )
    }
})
bot.on('message', msg => {
    console.log(msg)
    if(msg.text == '💰 Men Bajargan Vazifalar 🤑') {
        bot.sendPhoto(msg.chat.id, './images/akademy_nashr.jpg', {
            caption: "AkademNashr Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the AkademNashr Site',
                            callback_data: 'ielts_register',
                            url: 'https://akadem-nashr1.netlify.app'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/battary.jpg', {
            caption: "Battery Indicator Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Battery Indicator Site',
                            callback_data: 'ielts_register',
                            url: 'https://battary-level.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/coffe.jpg', {
            caption: "CoffeeRoaster Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the CoffeeRoaster Site',
                            callback_data: 'ielts_register',
                            url: 'https://coffeeroaster12.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/designo.jpg', {
            caption: "Designo Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Designo Site',
                            callback_data: 'ielts_register',
                            url: 'https://designo-uz.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/km_distance.jpg', {
            caption: "Km Distance Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Km Distance Site',
                            callback_data: 'ielts_register',
                            url: 'https://km-distance.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/kun_uz.jpg', {
            caption: "Kun UZ Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Kun UZ Site',
                            callback_data: 'ielts_register',
                            url: 'https://kun-uz-home.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/pokemon.jpg', {
            caption: "Pokemon Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Pokemon Site',
                            callback_data: 'ielts_register',
                            url: 'https://pokemons-20.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/tasbeh.jpg', {
            caption: "Tasbeh Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Tasbeh Site',
                            callback_data: 'ielts_register',
                            url: 'https://tasbeh-xurshid.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/todo_app.jpg', {
            caption: "Todo List App Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Todo List App Site',
                            callback_data: 'ielts_register',
                            url: 'https://lists-to-do.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/valute_converter.jpg', {
            caption: "Valute Converter Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Valute Converter Site',
                            callback_data: 'ielts_register',
                            url: 'https://uzb-rub-euro.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        bot.sendPhoto(msg.chat.id, './images/watch_uzb.jpg', {
            caption: "Watch Uzb Web Site",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Visit the Watch Uzb Site',
                            callback_data: 'ielts_register',
                            url: 'https://watch-uzb.netlify.app/'
                        }
                    ]
                ]
            },
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Orqaga 🔙'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        }
        )
        
    }

    if(msg.text == 'Orqaga 🔙') {
        bot.sendMessage(msg.chat.id, `Asosiy menyu`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: '👩‍💻 Men Haqimda 👨‍💻'
                        },
                        {
                            text: '💰 Men Bajargan Vazifalar 🤑'
                        }
                    ],
                    [
                        {
                            text: '🤓 Mening Rezumeyim 😇'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }
})
bot.on('message', msg => {
    console.log(msg)
    if(msg.text == '🤓 Mening Rezumeyim 😇') {
        bot.sendPhoto(msg.chat.id, 'https://techrocks.ru/wp-content/uploads/2019/02/1_FGBGYSyUz0yhcjms6B_ULg.jpeg', {
            caption: "Frontend: Html5, Css3, Sass, Scss, BootStrapt, GitHub, Javascript. Backend: NodeJS, Http Server, OOP, Fs, Path, OS, ExressJS, Middlewares, JWT, MVC, Websockets, Telegram Bot", 
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: 'Orqaga 🔙'
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            
            
        }
        )
    }
})