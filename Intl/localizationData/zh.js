export default {
  locale: 'zh',
  messages: {
    siteTitle: '鶴池的部落格',
    addPost: '新增貼文',
    switchLanguage: '變更語言',
    twitterMessage: '我的退特',
    by: '作者',
    deletePost: '刪除貼文',
    createNewPost: '新增貼文',
    authorName: '作者名稱',
    postTitle: '標題',
    postContent: '內文',
    submit: '送出',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`,
  },
};
