    ReactDOM.render(
    <div>
      <HelloWorld
        id='madeup'
        frameworkname='madeup.js'
        title='A crap framework I just invented in my head.'/>
      <HelloWorld
        id='ember'
        frameworkname='Ember.js'
        title='A framework for creating ambitious web applications.'/>
      <HelloWorld
        id='backbone'
        frameworkname='Backbone.js'
        title='Backbone.js gives structure to web applications...'/>
      <HelloWorld
        id='angular'
        frameworkname='I dunno'
        title='i dunno'/>
      <GoodbyeWorld
        butt='bored'/>
    </div>,
    document.getElementById('content')
  )