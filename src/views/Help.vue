<template>
  <div class="showcaseHelp">
    <div class="sidebar">
      <h2 @click="goback">返回首页</h2>
      <h2>帮助中心</h2>
      <input type="text"
             placeholder="搜索">
      <ul>
        <li @click="toggle(true)">条目1</li>
        <li @click="toggle(false)">条目2</li>
      </ul>
    </div>
    <div class="content">
      <pre>
          <code class="language-js">
// 路由定义
{
  path: 'help',
  name: 'showcaseHelp',
  component: () =>
    import(/* webpackChunkName: "help" */ '../views/Help.vue'),
  meta: {
    title: '切换布局',
    layout: 'layoutBlank', // 毛坯布局
    icon: 'setting'
  }
}
      </code>
        </pre>
      <div v-if="show">
        <h2><a href="#Cookbook-vs-指南"
             class="headerlink"
             title="Cookbook vs 指南"></a>Cookbook vs 指南</h2>
        <p>这份 cookbook 和指南的不同之处在哪里？存在的意义是什么？</p>
        <ul>
          <li>
            <p><strong>更专注</strong>：在指南里，我们实际上是在讲一个故事。每个章节都以之前章节的知识进行构建和假设。而在 cookbook 里，每个案例都有各自的代表性。也就是说每个案例都专注于 Vue 的某个特定方面，而不是一个概览。</p>
          </li>
          <li>
            <p><strong>更有深度</strong>：为了避免指南写得太长，我们试着只包含了尽可能简单的示例来帮助你理解每个功能，然后就奔下一个话题了。在 cookbook 里，我们以更生动的形式包含了更复杂的示例并结合特性。每个案例都可以尽可能的翔实，以彻底探索这个领域。</p>
          </li>
          <li>
            <p><strong>传授 JavaScript</strong>：在指南里，我们假设你至少具有 ES5 JavaScript 的中级水平。例如，我们不会解释 <code>Array.prototype.filter</code> 在计算属性中是如何过滤一个列表的。然而在 cookbook 里，我们将对一些必要的 JavaScript 特性 (包括 ES6/2015+) 进行探索和解释，以帮助我们构建更好的 Vue 应用。</p>
          </li>
          <li>
            <p><strong>探索生态系统</strong>：对于高级特性，我们会假设你已经对生态系统有一定了解。例如，如果你想在 webpack 中使用单文件组件，我们不会解释如何在 webpack 中配置 Vue 以外的部分。在 cookbook 里，我们有空间去更深度探索这些生态系统中的库——至少能到对 Vue 开发者普遍使用的程度。</p>
          </li>
        </ul>
      </div>
      <div v-else>
        <h2 id="参与-Cookbook-贡献"><a href="#参与-Cookbook-贡献"
             class="headerlink"
             title="参与 Cookbook 贡献"></a>参与 Cookbook 贡献</h2>
        <h3 id="我们的目标"><a href="#我们的目标"
             class="headerlink"
             title="我们的目标"></a>我们的目标</h3>
        <p>Cookbook 为开发者提供了一些示例，涵盖常见的或有趣的用例，并逐步解释更复杂的细节。我们的目标是超越一个简单的示例介绍，展现更广泛适用的概念及其注意事项。</p>
        <p>如果你有兴趣参与贡献，请将您的想法填入 issue 并加上 <strong>cookbook idea</strong> 的标签作为起步，这样我们就可以帮助并引导您完成一个 pull request。在你的想法被认同之后，请尽可能遵循以下模板。有些小节是必须的，有些是可选的。我们强烈建议您遵循其顺序，但这也不是必须的。<br>通常情况下案例应该：</p>
        <blockquote>
          <ul>
            <li>解决一个具体的普遍性问题</li>
            <li>从尽可能简单的示例开始</li>
            <li>一次只介绍一个复杂的点</li>
            <li>链接到其它文档，而不是在这里重新解释概念</li>
            <li>把问题描述清楚，而不是假设大家对这个问题很熟悉</li>
            <li>解释过程，而不是只告诉你最终结果</li>
            <li>解释策略的利弊，包括它不适用于什么场景</li>
            <li>会提及相关的替代方案，但会放到一个单独的案例中细讲</li>
          </ul>
        </blockquote>
        <p>我们需要您遵照下面的模板。当然我们也理解有的时候为了使内容更清晰或顺畅你是有必要做一些调整的。另外不论怎样，所有的案例都应该从某些点上讨论选择使用这个模式的细微差别，且我们倾向于它们以替代方案章节的形式出现。</p>
        <h3 id="基本的示例"><a href="#基本的示例"
             class="headerlink"
             title="基本的示例"></a>基本的示例</h3>
        <p><em>必须的</em></p>
        <ol>
          <li>用一两句话来说明问题。</li>
          <li>用一两句话解释最简单的可能的解决方案。</li>
          <li>显示一小段代码示例。</li>
          <li>用一句话解释它完成了什么。</li>
        </ol>
        <h3 id="关于其价值的细节"><a href="#关于其价值的细节"
             class="headerlink"
             title="关于其价值的细节"></a>关于其价值的细节</h3>
        <p><em>必须的</em></p>
        <ol>
          <li>解决人们在看例子时可能遇到的常见问题。(最好以块引用格式呈现)</li>
          <li>显示常见错误的例子，以及如何避免它们。</li>
          <li>用非常简单的代码示例展示好模式和坏模式。</li>
          <li>讨论这个模式令人信服的理由。参考链接不是必需的，但鼓励提供。</li>
        </ol>
        <h3 id="实际的例子"><a href="#实际的例子"
             class="headerlink"
             title="实际的例子"></a>实际的例子</h3>
        <p><em>必须的</em></p>
        <p>通过以下方式演示能够为常见或有趣的用例提供支持的代码：</p>
        <ol>
          <li>通过几个简单的设置例子，或者</li>
          <li>嵌入一个 CodePen / JSFiddle 的例子</li>
        </ol>
        <p>如果你选择稍后再提供，那么你仍应该表述它是什么和做什么。</p>
        <h3 id="额外的上下文"><a href="#额外的上下文"
             class="headerlink"
             title="额外的上下文"></a>额外的上下文</h3>
        <p><em>可选的</em></p>
        <p>为这个模式写点东西，描述在这个模式下，它会应用到什么地方，为什么它能正常工作；以及在此基础上运行一些代码、提供一些延伸阅读材料，都是非常有帮助的。</p>
        <h3 id="何时避免这个模式"><a href="#何时避免这个模式"
             class="headerlink"
             title="何时避免这个模式"></a>何时避免这个模式</h3>
        <p><em>可选的</em></p>
        <p>本节不是必需的，但强烈建议。你没有必要写一些特别简单易懂的事项，比如根据状态的改变开关 class，但是对于 mixin 这样的更高阶的模式来说是非常重要的。大多数高阶的问题的答案都是<a href="https://codepen.io/rachsmith/pen/YweZbG"
             target="_blank"
             rel="noopener">“要看情况！”</a>，该部分就包含了这一点。在此，我们要诚实地看待模式何时有用，何时应该避免，什么时候更有意义。</p>
        <h3 id="替代方案"><a href="#替代方案"
             class="headerlink"
             title="替代方案"></a>替代方案</h3>
        <p><em>可选的，除非这部分内容在之前已经提供过了</em></p>
        <p>如果你已经在上一节提供了避免使用的条件，那么这一节是必须的。探索其它方法非常重要，这样人们在遇到某些反模式的情形时不至于无所适从。这样做是因为考虑到 web 是一个不同人有着不同代码结构解决不同问题的大舞台。这个应用是大是小？它们要把 Vue 集成到一个现成的项目中还是从零起步构建新项目？它们的用户只是想达成一个目标还是多个？有很多异步数据吗？所有的这些担忧都会影响实现替代品。一篇好的 cookbook 会为开发者提供这些相关信息。</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'showcaseHelp',
  data: () => ({
    show: true
  }),
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    toggle(value) {
      this.show = value
    },
    goback() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus">
.showcaseHelp
  display flex
  height 100%

  .sidebar
    flex 0 0 200px
    text-align center
    background #333
    color #fff

    li
      cursor pointer

  .content
    flex auto
    padding 15px 30px
    height 100%
    overflow auto
</style>

