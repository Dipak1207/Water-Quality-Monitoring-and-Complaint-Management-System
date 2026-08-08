package com.example.backend.controller;

import com.example.backend.entity.WaterTestReport;
import com.example.backend.service.WaterTestReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/water-tests")
@CrossOrigin
public class WaterTestReportController {

    @Autowired
    private WaterTestReportService waterTestReportService;

    @PostMapping("/add")
    public WaterTestReport createReport(@RequestBody WaterTestReport report) {
        return waterTestReportService.createReport(report);
    }

    @GetMapping("/getAll")
    public List<WaterTestReport> getAllReports() {
        return waterTestReportService.getAllReports();
    }

    @GetMapping("/{id}")
    public WaterTestReport getReportById(@PathVariable Long id) {
        return waterTestReportService.getReportById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReport(@PathVariable Long id) {
        waterTestReportService.deleteReport(id);
    }
}
