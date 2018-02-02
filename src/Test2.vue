<template>
  <div class="page-content">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="中国足球"
        width="380">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="业主名称"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.owner }}</p>
            <p>住址: {{ scope.row.owner_phone }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.owner }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="业主电话" width="120" prop="owner_phone">
      </el-table-column>
      <el-table-column label="信息来源" width="180" prop="source">
      </el-table-column>
      <el-table-column label="采集时间" width="120" prop="date">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :page-sizes="[15, 20, 30]"
        :page-size="15"
        :total="400">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        tableData: []
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      getData () {
        this.$http.get('/api/projects').then((res) => {
          console.log(res.data)
          this.tableData = res.data
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>
