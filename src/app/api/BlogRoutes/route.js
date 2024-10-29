

export async function GET(req) {
    const authHeader = req.headers.get('authorization').split('Bearer ').at(1);
    if (authHeader!=='TestToken') {
        return new Response(
          JSON.stringify({ message: "Authorization header missing" }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    try {
      const blog = [
        {
            "id": 254,
            "date": "2024-05-05T07:35:57",
            "date_gmt": "2024-05-05T07:35:57",
            "modified": "2024-05-05T07:37:40",
            "modified_gmt": "2024-05-05T07:37:40",
            "slug": "article-copy-10",
            "status": "publish",
            "type": "post",
            "title": {
                "rendered": "عنوان بلاگ در این قسمت نوشته شود و ممکن است دو سطری باشد."
            },
            "content": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه [&hellip;]</p>\n",
                "protected": false
            },
            "categories": [
                {
                    "id": 1,
                    "name": "دسته اخبار",
                    "slug": "news-cat"
                }
            ],
            "featured_media_object": {
                "id": 131,
                "title": "card-3",
                "caption": "",
                "description": "",
                "media_details": {
                    "width": 421,
                    "height": 247,
                    "filesize": 8174
                },
                "source_url": "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/04/card-3.webp"
            }
        },
        {
            "id": 253,
            "date": "2024-05-05T07:28:13",
            "date_gmt": "2024-05-05T07:28:13",
            "modified": "2024-05-05T07:37:54",
            "modified_gmt": "2024-05-05T07:37:54",
            "slug": "article-copy-9",
            "status": "publish",
            "type": "post",
            "title": {
                "rendered": "عنوان بلاگ در این قسمت نوشته شود و ممکن است دو سطری باشد."
            },
            "content": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه [&hellip;]</p>\n",
                "protected": false
            },
            "categories": [
                {
                    "id": 1,
                    "name": "دسته اخبار",
                    "slug": "news-cat"
                }
            ],
            "featured_media_object": {
                "id": 125,
                "title": "card-4",
                "caption": "",
                "description": "",
                "media_details": {
                    "width": 421,
                    "height": 247,
                    "filesize": 12116
                },
                "source_url": "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/04/card-4.webp"
            }
        },
        {
            "id": 252,
            "date": "2024-05-05T07:27:55",
            "date_gmt": "2024-05-05T07:27:55",
            "modified": "2024-05-05T07:39:29",
            "modified_gmt": "2024-05-05T07:39:29",
            "slug": "article-copy-8",
            "status": "publish",
            "type": "post",
            "title": {
                "rendered": "عنوان بلاگ در این قسمت نوشته شود و ممکن است دو سطری باشد."
            },
            "content": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه [&hellip;]</p>\n",
                "protected": false
            },
            "categories": [
                {
                    "id": 1,
                    "name": "دسته اخبار",
                    "slug": "news-cat"
                }
            ],
            "featured_media_object": {
                "id": 127,
                "title": "card-b2",
                "caption": "",
                "media_details": {
                    "width": 559,
                    "height": 322,
                    "filesize": 35416
                },
                "source_url": "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/04/card-b2.webp"
            }
        },
        {
            "id": 251,
            "date": "2024-05-05T07:27:49",
            "date_gmt": "2024-05-05T07:27:49",
            "modified": "2024-05-05T07:39:43",
            "modified_gmt": "2024-05-05T07:39:43",
            "slug": "article-copy-7",
            "status": "publish",
            "type": "post",
            "title": {
                "rendered": "عنوان بلاگ در این قسمت نوشته شود و ممکن است دو سطری باشد."
            },
            "content": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه [&hellip;]</p>\n",
                "protected": false
            },
            "categories": [
                {
                    "id": 1,
                    "name": "دسته اخبار",
                    "slug": "news-cat"
                }
            ],
            "featured_media_object": {
                "id": 89,
                "title": "card-b-1",
                "caption": "",
                "description": "",
                "media_details": {
                    "width": 327,
                    "height": 327,
                    "filesize": 43158
                },
                "source_url": "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/04/card-b-1.webp"
            }
        },
        {
            "id": 250,
            "date": "2024-05-05T07:27:42",
            "date_gmt": "2024-05-05T07:27:42",
            "modified": "2024-05-05T07:39:57",
            "modified_gmt": "2024-05-05T07:39:57",
            "slug": "article-copy-6",
            "status": "publish",
            "type": "post",
            "title": {
                "rendered": "عنوان بلاگ در این قسمت نوشته شود و ممکن است دو سطری باشد."
            },
            "content": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه [&hellip;]</p>\n",
                "protected": false
            },
            "categories": [
                {
                    "id": 1,
                    "name": "دسته اخبار",
                    "slug": "news-cat"
                }
            ],
            "featured_media_object": {
                "id": 91,
                "title": "carde-b1",
                "caption": "",
                "description": "",
                "media_details": {
                    "width": 559,
                    "height": 320,
                    "filesize": 25406
                },
                "source_url": "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/04/carde-b1.webp"
            }
        },
        {
            "id": 249,
            "date": "2024-05-05T07:27:18",
            "date_gmt": "2024-05-05T07:27:18",
            "modified": "2024-05-05T07:40:18",
            "modified_gmt": "2024-05-05T07:40:18",
            "slug": "article-copy-5",
            "status": "publish",
            "type": "post",
            "title": {
                "rendered": "عنوان بلاگ در این قسمت نوشته شود و ممکن است دو سطری باشد."
            },
            "content": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه [&hellip;]</p>\n",
                "protected": false
            },
            "author": 1,
            "featured_media": 262,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "standard",
            "categories": [
                {
                    "id": 1,
                    "name": "دسته اخبار",
                    "slug": "news-cat"
                }
            ],
            "featured_media_object": {
                "id": 262,
                "title": "card2",
                "caption": "",
                "description": "",
                "media_details": {
                    "width": 421,
                    "height": 247,
                    "filesize": 16726
                },
                "source_url": "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/05/card2.webp"
            }
        }
    ]
  
      return new Response(JSON.stringify(blog), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Failed to fetch posts" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
  