<template>
  <div class="page-content">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="项目名称"
        width="600">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="业主名称"
        width="300">
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
      <el-table-column label="业主电话" width="150" prop="owner_phone">
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
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :current-page = "currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
        @current-change="currentChange">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        tableData: [],
        total: 0,
        pageSize: 10,
        currentPage: 1,
        pageSizes: [10, 15, 20]
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      sizeChange (size) {
        this.pageSize = size
        this.getData()
      },
      currentChange (current) {
        this.currentPage = current
        this.getData()
      },
      getData () {
        this.$http.get('/api/market/bided', {
          params: {
            page: this.currentPage-1,
            size: this.pageSize
          }
        }).then((res) => {
          console.log(res.data)
          this.tableData = res.data.content
          this.total = res.data.totalElements
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>
