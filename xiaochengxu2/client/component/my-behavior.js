module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function () { 
    this.myBehaviorMethod()
  },
  methods: {
    myBehaviorMethod: function () { }
  }
})