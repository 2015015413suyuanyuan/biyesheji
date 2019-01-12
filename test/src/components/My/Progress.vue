<template>
  <div class="progress">
    <canvas id="canvas" width="300" height="300">
    </canvas>
  </div>
</template>

<script>
export default {
  props: ['num'],
  created() {
    this.toCanvas('canvas', this.num);
    this.canvas = document.getElementById('canvas');
    this.ctx = document.getElementById('canvas').getContext('2d');
    this.percent = this.progress;
    this.circleX = this.ctx.width / 2;
    this.circleY = this.ctx.height / 2;
  },
  data() {
    return {
      canvas: '',
      ctx: '',
      percent: '',
      circleX: '',
      circleY: '',
      radius: 100,
      lineWidth: 8,
      fontSize: 10,
      process: 0.0,
      circleLoading: '',
    };
  },
  methods: {
    toCanvas(id, progress) {
      this.circleLoading = window.setInterval(() => {
        this.loading(progress);
      }, 20);
    },
    // 画弧线
    sector(cx, cy, r, startAngle, endAngle) {
      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      // 渐变色 - 可自定义
      const cirX = this.circleX - this.radius - this.lineWidth;
      const cirY = this.circleX + this.radius + this.lineWidth;

      const linGrad = this.ctx.createLinearGradient(cirX, this.circleY, cirY, this.circleY);
      linGrad.addColorStop(0.0, '#06a8f3');
      linGrad.addColorStop(1.0, '#00f8bb');
      this.ctx.strokeStyle = '#8909ac';
      // 圆弧两端的样式
      this.ctx.lineCap = 'round';
      const endAngle1 = endAngle / 100;
      this.ctx.arc(cx, cy, r, Math.PI, Math.PI * (1 + endAngle1));
      this.ctx.stroke();
    },
    // 刷新
    loading(progress) {
      const percent3 = progress;
      if (this.process >= this.percent) clearInterval(this.circleLoading);
      // 清除canvas内容
      this.ctx.clearRect(0, 0, this.circleX * 2, this.circleY * 2);
      // 中间的字
      this.ctx.font = this.fontSize + 'px April';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillStyle = '#999';
      const circleYY = this.circleY * 4;
      const stringProcess = parseFloat(this.process).toFixed(0);
      this.ctx.fillText(stringProcess + '%', this.circleX, circleYY / 5);
      this.ctx.fillText('已抢', this.circleX, this.circleY);
      // 圆形
      this.circle(this.circleX, this.circleY, this.radius);
      // 圆弧
      const yuanhu = Math.PI * 2;
      this.sector(this.circleX, this.circleY, this.radius, yuanhu / 2, this.process);
      if (this.process < percent3) {
        if (this.process / this.percent > 0.90) {
          this.process += 0.30;
        } else if (this.process / this.percent > 0.80) {
          this.process += 0.55;
        } else if (this.process / this.percent > 0.70) {
          this.process += 0.75;
        } else {
          this.process += 1.0;
        }
      }
    },
  },
};
</script>