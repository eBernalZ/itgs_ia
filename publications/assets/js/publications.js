google.charts.load('current', {
    'packages': ['timeline']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var html_element = document.getElementById('timeline');
    var timeline = new google.visualization.Timeline(html_element);
    var researchTimeline = new google.visualization.DataTable();
    var options = {
        timeline: {
            showRowLabels: false,
            fontSize: 20
        }

    };

    researchTimeline.addColumn({
        type: 'string',
        id: 'Type'
    });
    researchTimeline.addColumn({
        type: 'string',
        id: 'Publication name'
    });
    researchTimeline.addColumn({
        type: 'date',
        id: 'Start'
    });
    researchTimeline.addColumn({
        type: 'date',
        id: 'End'
    });
    researchTimeline.addRows([
        ['Journal Publication', 'Polyoctanediol citrate-ZnO composite films: preparation, characterization and release kinetics of nanoparticles from polymer matrix', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'Biosensing enhancement of Dengue virus using microballoon mixers on centrifugal microfluidic platforms', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'A novel approach for application of nylon membranes in the biosensing domain', new Date(2014, 12, 1), new Date(2015, 12, 0)],
        ['Journal Publication', 'Polypyrrole conducting polymer: an efficient adsorbent for lead ions from aqueous solution', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'Structural and end-group analysis of synthetic acrylate co-polymers by matrix-assisted laser desorption time-of-flight mass spectrometry: distribution of pendant carboxyl groups', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'Synthesis and characterization of methacrylic microspheres for biomolecular recognition: potential biosensor application for Dengue virus detection', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'Synthesis and processing of ELISA polymer substitute: the influence of surface chemistry and morphology on detection sensitivity', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'Polymethyl methacrylate-co-methacrylic acid coatings with controllable concentration of surface carboxyl groups: a novel approach in fabrication of polymeric platforms for potential bio-diagnostic devices', new Date(2014, 1, 0), new Date(2014, 12, 0)],
        ['Journal Publication', 'Polypyrrole conducting polymer and its application in removal of copper ions from aqueous solution', new Date(2014, 12, 1), new Date(2015, 12, 0)],
        ['Journal Publication', 'Polymethacrylate Coated Electrospun PHB Fibers: An Exquisite Outlook for Fabrication of Paper-Based Biosensors', new Date(2014, 12, 1), new Date(2015, 12, 0)],
        ['Journal Publication', 'Aging effect and antibody immobilization on - COOH exposed surfaces designed for dengue virus detection', new Date(2014, 12, 1), new Date(2015, 12, 0)],
        ['Journal Publication', 'Microsphere integrated microfluidic disk: synergy of two techniques for rapid and ultrasensitive dengue detection', new Date(2014, 12, 1), new Date(2015, 12, 0)],
        ['Journal Publication', 'Multi-target activities of natural compounds: Alkaloids and Terpenes', new Date(2014, 12, 1), new Date(2015, 12, 0)],
        ['Journal Publication', 'Intrant ELISA: A Novel Approach to Fabrication of Electrospun Fiber Mat-Assisted Biosensor Platforms and Their Integration within Standard Analytical Well Plates', new Date(2015, 12, 1), new Date(2016, 12, 0)],
        ['Journal Publication', 'Paper- and Fiber-Based Bio-analytical Platforms: Current Needs and Future Challenges', new Date(2016, 12, 1), new Date(2017, 12, 0)],
        ['Journal Publication', 'Polymethacrylate Coated Electrospun PHB Fibers as Functionalized Platform for Bio-diagnostics: Confirmation Analysis on the Presence of Immobilized IgG Antibodies Against Dengue Virus', new Date(2016, 12, 1), new Date(2017, 12, 0)],
        ['Journal Publication', 'Latest updates in covalent functionalization of the carbon nano-materials for biosensor applications', new Date(2017, 12, 1), new Date(2018, 12, 0)],
        ['Journal Publication', 'Dengue fever: A worldwide threat; An overview of the infection process, environmental factors for global outbreak, diagnostic platforms, and vaccine developments', new Date(2017, 12, 1), new Date(2018, 12, 0)],
        ['Journal Publication', 'Latest Updates in Dengue Fever Therapeutics: Natural, Marine, and Synthetic Drugs', new Date(2018, 12, 1), new Date(2019, 12, 0)],
        ['Journal Publication', 'Nanogap and nanoconstriction formation by controlled thinning process of suspended carbon nanofibers', new Date(2018, 12, 1), new Date(2019, 12, 0)],
        ['Journal Publication', 'Strengthening critical thinking in engineering students', new Date(2018, 12, 1), new Date(2019, 12, 0)],
        ['Journal Publication', 'Internal and external factors of plagiarism: Evidence from Chinese public sector universities', new Date(2018, 12, 1), new Date(2019, 12, 0)],

    ]);

    timeline.draw(researchTimeline, options);
}