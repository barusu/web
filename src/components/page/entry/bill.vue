<style lang="scss">
  .bill {
    .item {
      float: left;
      width: 25%;
      padding: 0;
      margin: 0 .05rem .1rem;
      font-size: .14rem;
      line-height: 2.5;
      border-radius: 4px;
      color: #333;
      border: 1px solid transparent;
    }
  }
</style>

<template>
  <div class="bill">
    <h2><span>Bill</span></h2>
    <p>Base Info.</p>
    <div class="clearfix">
      <div class="item">
        <o-input v-model="ship.no" label="弦号" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.name" label="名字" type="single"></o-input>
      </div>
      <div class="item">
        <o-select v-model="ship.status" label="状态" type="single" :data="status"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.type" label="类型" type="single" :data="type"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.camp" label="国籍" type="single" :data="camp"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.rarity" label="稀有度" type="single" :data="rarity"></o-select>
      </div>
      <div class="item">
        <o-input v-model="ship.buildTime" label="建造时间" type="single"></o-input>
      </div>
    </div>
    <p>Property</p>
    <div class="clearfix">
      <div class="item">
        <o-input v-model="ship.hp" label="耐久" type="single"></o-input>
      </div>
      <div class="item">
        <o-select v-model="ship.armor" label="装甲" type="single" :data="armor"></o-select>
      </div>
      <div class="item">
        <o-input v-model="ship.fill" label="填装" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.fire" label="炮击" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.torpedo" label="雷击" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.dodge" label="机动" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.air" label="航空" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.airDef" label="防空" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.oil" label="油耗" type="single" readonly></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.speed" label="航速" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.luck" label="幸运" type="single"></o-input>
      </div>
    </div>
    <p>Equip</p>
    <div class="clearfix">
      <div class="item">
        <o-select v-model="ship.equip1" label="装备位1" type="single" :data="equip"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.equip2" label="装备位2" type="single" :data="equip"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.equip3" label="装备位3" type="single" :data="equip"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.equip4" label="装备位4" type="single" :data="equip"></o-select>
      </div>
      <div class="item">
        <o-select v-model="ship.equip5" label="装备位5" type="single" :data="equip"></o-select>
      </div>
    </div>
    <div class="clearfix">
      <div class="item">
        <o-input v-model="ship.equipEffic1" label="装备位1效率" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.equipEffic2" label="装备位2效率" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.equipEffic3" label="装备位3效率" type="single"></o-input>
      </div>
    </div>
    <p>Images</p>
    <div class="clearfix">
      <div class="item">
        <o-input v-model="ship.img" label="立绘" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.reform" label="改造立绘" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="ship.marry" label="婚纱立绘" type="single"></o-input>
      </div>
    </div>
    <p>Other</p>
    <div class="clearfix">
      <div class="item">
        <o-input v-model="ship.oilCorrection" label="油耗补正" type="single"></o-input>
      </div>
    </div>
    <div class="clearfix">
      <div class="item">
        <o-button @click="save">保存</o-button>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax';

  const rarityOil = {N: 0, R: 1, SR: 2, SSR: 3, UR: 4};
  const typeOil = {DD: 1, CL: 2, CA: 3, BB: 6, BC: 5, CVL: 3, CV: 4, BBV: 6, AR: 2};

  function getEmptyShip() {
    return {
      no: '',
      name: '',
      type: '',
      camp: '',
      buildTime: '',
      rarity: '',
      armor: 'LA',
      hp: '',
      fill: '',
      fire: '',
      torpedo: '',
      dodge: '',
      air: '',
      airDef: '',
      oil: '',
      speed: '',
      luck: '',
      equip1: '',
      equip2: '',
      equip3: 'ADA',
      equip4: 'EQ',
      equip5: 'EQ',
      equipEffic1: '',
      equipEffic2: '',
      equipEffic3: '',
      img: '',
      marry: '',
      reform: '',
      skin: '[]',
      oilCorrection: '',
      skill: ''
    };
  }

  export default {
    data() {
      return {
        ship: getEmptyShip(),
        type: [
          {value: 'DD', label: '驱逐舰'},
          {value: 'CL', label: '轻型巡洋舰'},
          {value: 'CA', label: '重型巡洋舰'},
          {value: 'BB', label: '战列舰'},
          {value: 'BC', label: '战列巡洋舰'},
          {value: 'CVL', label: '轻型航空母舰'},
          {value: 'CV', label: '航空母舰'},
          {value: 'BBV', label: '航空战舰'},
          {value: 'AR', label: '维修舰'}
        ],
        status: [
          {value: 'F', label: '满破'},
          {value: 'FR', label: '满改'},
          {value: 'HR', label: '半改'}
        ],
        camp: [
          {value: '皇家', label: '英国'},
          {value: '白鹰', label: '美国'},
          {value: '重樱', label: '日本'},
          {value: '东煌', label: '中国'},
          {value: '北方联合', label: '俄罗斯'},
          {value: '无', label: '无国籍'}
        ],
        rarity: [
          {value: 'N', label: '白 ☆'},
          {value: 'R', label: '蓝 ☆☆'},
          {value: 'SR', label: '紫 ☆☆☆'},
          {value: 'SSR', label: '金 ☆☆☆☆'},
          {value: 'UR', label: '彩 ☆☆☆☆☆'}
        ],
        armor: [
          {value: 'LA', label: '轻甲'},
          {value: 'MA', label: '中甲'},
          {value: 'HA', label: '重甲'}
        ],
        equip: [
          {value: 'EQ', label: '设备'},
          {value: 'ADA', label: '防空炮'},
          {value: 'TD', label: '鱼雷'},
          {value: 'DDG', label: '驱逐主炮'},
          {value: 'CLG', label: '轻巡主炮'},
          {value: 'CAG', label: '重巡主炮'},
          {value: 'BBG', label: '战列主炮'},
          {value: 'FP', label: '战斗机'},
          {value: 'BP', label: '轰炸机'},
          {value: 'TP', label: '鱼雷机'},
          {value: 'WS', label: '水侦'}
        ]
      };
    },
    watch: {
      'ship.type': function(value) {
        switch(value) {
        case 'DD':
          this.ship.equip1 = 'DDG';
          this.ship.equip2 = 'TD';
          break;
        case 'CL':
          this.ship.equip1 = 'CLG';
          this.ship.equip2 = 'TD';
          break;
        case 'CA':
          this.ship.equip1 = 'CAG';
          this.ship.equip2 = 'TD';
          break;
        case 'BB':
          this.ship.equip1 = 'BBG';
          this.ship.equip2 = 'CLG';
          break;
        case 'BC':
          this.ship.equip1 = 'BBG';
          this.ship.equip2 = 'DDG';
          break;
        case 'CVL':
          this.ship.equip1 = '';
          this.ship.equip2 = '';
          break;
        case 'CV':
          this.ship.equip1 = 'FP';
          this.ship.equip2 = 'BP';
          this.ship.equip3 = 'TP';
          break;
        case 'BBV':
          this.ship.equip1 = 'BBG';
          this.ship.equip2 = 'WS';
          break;
        case 'AR':
          this.ship.equip1 = 'EQ';
          this.ship.equip2 = 'ADA';
          break;
        default:
        }
        this.updateOil();
      },
      'ship.status': function(value) {
        if(value === 'FR') this.ship.oilCorrection = -1;
        this.updateOil();
      },
      'ship.rarity': 'updateOil',
      'ship.oilCorrection': 'updateOil'
    },
    methods: {
      updateOil() {
        if(this.ship.rarity && typeOil[this.ship.type]) {
          this.ship.oil = rarityOil[this.ship.rarity] + typeOil[this.ship.type] + 6;
          if(this.ship.oilCorrection) this.ship.oil += parseInt(this.ship.oilCorrection);
        }
      },
      save() {
        $.post('resource/azurlane/add', this.ship, data => {
          if(data == '1') {
            this.$msg.success('新增成功');
            this.ship = getEmptyShip();
          }else {
            this.$msg.error('添加失败');
          }
        });
      }
    }
  }
</script>
