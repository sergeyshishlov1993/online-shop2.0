import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useBlogData = defineStore("blog", () => {
  const date = new Date();

  const blogData = reactive([
    {
      src: "blogImg1.png",
      date: "Fashion - October 8, 2020",
      title: "Top Trends From Spring",
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",

      comments: [
        {
          avatar:
            "https://img.freepik.com/premium-photo/beauty-portrait-of-an-attractive-smiling-young-topless-brunette-woman-standing-isolated-on-white-away_171337-118149.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
          name: "Scarlet withch",
          date: getCurrentDate().format(date),
          id: 1,
          comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
          remeberUser: false,

          replyToComment: [
            {
              avatar:
                "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
              name: "Kate moss",
              date: getCurrentDate().format(date),
              id: 1,
              comment:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
            },
          ],
        },
      ],
    },

    {
      src: "blogImg2.png",
      date: getCurrentDate().format(date),
      title: "Top Trends From Spring",
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",

      comments: [
        {
          avatar:
            "https://img.freepik.com/premium-photo/illustration-of-female-college-student-on-a-gray-background-with-white-shirt_1375-18704.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
          name: "Scarlet withch",
          date: getCurrentDate().format(date),
          id: 2,
          comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
          remeberUser: false,

          replyToComment: [
            {
              avatar:
                "https://img.freepik.com/premium-photo/young-beautiful-woman-wearing-casual-clothes-amazed-and-smiling_812426-13953.jpg?size=626&ext=jpg&ga=GA1.2.1119547970.1691761526&semt=ais",
              name: "Kate moss",
              date: getCurrentDate().format(date),
              id: 2,
              comment:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
            },
          ],
        },
      ],
    },

    {
      src: "blogImg3.png",
      date: "Fashion - October 8, 2020",
      title: "Top Trends From Spring",
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",

      comments: [
        {
          avatar:
            "https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-in-casual-clothes-looking-seriously_176420-15186.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
          name: "Scarlet withch",
          date: getCurrentDate().format(date),
          id: 3,
          comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
          remeberUser: false,

          replyToComment: [
            {
              avatar:
                "https://img.freepik.com/free-photo/stunning-european-lady-with-shiny-hair-posing-with-pleasure-indoor-photo-of-carefree-woman-isolated_197531-9394.jpg?size=626&ext=jpg&ga=GA1.2.1119547970.1691761526&semt=ais",
              name: "Kate moss",
              date: getCurrentDate().format(date),
              id: 3,
              comment:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
            },
          ],
        },
      ],
    },

    {
      src: "blogImg4.png",
      date: "Fashion - October 8, 2020",
      title: "Top Trends From Spring",
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",

      comments: [
        {
          avatar:
            "https://img.freepik.com/free-photo/people-and-emotions-close-up-of-confident-smiling-young-woman-looking-at-camera-standing-in-casual-r_1258-87448.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
          name: "Scarlet withch",
          date: getCurrentDate().format(date),
          id: 4,
          comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
          remeberUser: false,

          replyToComment: [
            {
              avatar:
                "https://img.freepik.com/free-photo/adorable-blonde-woman-with-serious-expression-dressed-in-blue-sweater-has-healthy-clean-skin-isolated-over-white-wall-pretty-woman-demonstrates-her-natural-beauty_273609-17049.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
              name: "Kate moss",
              date: getCurrentDate().format(date),
              id: 4,
              comment:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
            },
          ],
        },
      ],
    },
  ]);

  function getCurrentDate() {
    const dateOptipn = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return new Intl.DateTimeFormat("en-Uk", dateOptipn);
  } // - current-date -

  function getСomment(name, comment, index, checked) {
    return blogData[index].comments.push({
      avatar:
        "https://img.freepik.com/premium-photo/illustration-of-female-college-student-on-a-gray-background-with-white-shirt_1375-18704.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
      name: name,
      date: getCurrentDate().format(date),
      id: blogData[index].comments.length + 1,
      comment: comment,
      remeberUser: checked,
      replyToComment: [],
    });
  }

  function getReplyToСomment(reply, id, currentObj) {
    console.log(id);
    currentObj.comments.filter((x) => {
      if (x.id === id && x.remeberUser === true) {
        console.log(x.id);
        x.replyToComment.push({
          avatar:
            "https://img.freepik.com/free-photo/adorable-blonde-woman-with-serious-expression-dressed-in-blue-sweater-has-healthy-clean-skin-isolated-over-white-wall-pretty-woman-demonstrates-her-natural-beauty_273609-17049.jpg?size=626&ext=jpg&ga=GA1.1.1119547970.1691761526&semt=ais",
          name: "Kate moss",
          date: getCurrentDate().format(date),
          id: x.replyToComment.length + 1,
          comment: reply,
        });
      }

      if (x.id === id && x.remeberUser == false) {
        x.replyToComment.push({
          avatar:
            "https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png",
          name: "Guest",
          date: getCurrentDate().format(date),
          id: x.replyToComment.length + 1,
          comment: reply,
        });
      }
    });
  }

  return {
    blogData,
    getСomment,
    getReplyToСomment,
  };
});
